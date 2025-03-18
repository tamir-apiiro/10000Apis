
const express = require('express')
import {handler7522} from "./handler7522";
const app = express()
app.get('/7522', handler7522)
app.listen(3000, () => {})
        