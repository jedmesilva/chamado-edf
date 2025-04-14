export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      account_user: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          stat: string | null
          user_id: string | null
          whatsapp: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          name?: string | null
          stat?: string | null
          user_id?: string | null
          whatsapp?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          stat?: string | null
          user_id?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      acenos: {
        Row: {
          carta_id: string | null
          created_at: string | null
          id: string
          location: string | null
          texto_aceno: string | null
          user_id: string | null
        }
        Insert: {
          carta_id?: string | null
          created_at?: string | null
          id: string
          location?: string | null
          texto_aceno?: string | null
          user_id?: string | null
        }
        Update: {
          carta_id?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          texto_aceno?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      cartas_um_chamado_a_edificacao: {
        Row: {
          body_html: string | null
          created_at: string | null
          date_send: string | null
          description: string | null
          id: string
          id_summary_carta: number | null
          jsonbody_carta: Json | null
          markdown_carta: string | null
          status_carta: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          body_html?: string | null
          created_at?: string | null
          date_send?: string | null
          description?: string | null
          id: string
          id_summary_carta?: number | null
          jsonbody_carta?: Json | null
          markdown_carta?: string | null
          status_carta?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          body_html?: string | null
          created_at?: string | null
          date_send?: string | null
          description?: string | null
          id?: string
          id_summary_carta?: number | null
          jsonbody_carta?: Json | null
          markdown_carta?: string | null
          status_carta?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      status_carta: {
        Row: {
          account_user_id: string | null
          carta_id: string | null
          created_at: string | null
          id: string
          stat: string | null
        }
        Insert: {
          account_user_id?: string | null
          carta_id?: string | null
          created_at?: string | null
          id: string
          stat?: string | null
        }
        Update: {
          account_user_id?: string | null
          carta_id?: string | null
          created_at?: string | null
          id?: string
          stat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "status_carta_account_user_id_fkey"
            columns: ["account_user_id"]
            isOneToOne: false
            referencedRelation: "account_user"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_um_chamado: {
        Row: {
          created_at: string | null
          email_subscription: string | null
          id: string
          status_subscription: string | null
        }
        Insert: {
          created_at?: string | null
          email_subscription?: string | null
          id: string
          status_subscription?: string | null
        }
        Update: {
          created_at?: string | null
          email_subscription?: string | null
          id?: string
          status_subscription?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
