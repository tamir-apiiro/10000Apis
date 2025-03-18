
const express = require('express')
import {handler7766} from "./handler7766";
const app = express()
app.get('/7766', handler7766)
app.listen(3000, () => {})
        