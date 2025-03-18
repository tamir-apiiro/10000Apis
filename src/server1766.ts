
const express = require('express')
import {handler1766} from "./handler1766";
const app = express()
app.get('/1766', handler1766)
app.listen(3000, () => {})
        