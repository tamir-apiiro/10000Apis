
const express = require('express')
import {handler6685} from "./handler6685";
const app = express()
app.get('/6685', handler6685)
app.listen(3000, () => {})
        