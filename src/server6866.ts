
const express = require('express')
import {handler6866} from "./handler6866";
const app = express()
app.get('/6866', handler6866)
app.listen(3000, () => {})
        