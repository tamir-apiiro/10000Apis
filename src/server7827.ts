
const express = require('express')
import {handler7827} from "./handler7827";
const app = express()
app.get('/7827', handler7827)
app.listen(3000, () => {})
        