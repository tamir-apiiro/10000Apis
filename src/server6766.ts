
const express = require('express')
import {handler6766} from "./handler6766";
const app = express()
app.get('/6766', handler6766)
app.listen(3000, () => {})
        