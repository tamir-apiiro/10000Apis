
const express = require('express')
import {handler3766} from "./handler3766";
const app = express()
app.get('/3766', handler3766)
app.listen(3000, () => {})
        