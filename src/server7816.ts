
const express = require('express')
import {handler7816} from "./handler7816";
const app = express()
app.get('/7816', handler7816)
app.listen(3000, () => {})
        