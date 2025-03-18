
const express = require('express')
import {handler7215} from "./handler7215";
const app = express()
app.get('/7215', handler7215)
app.listen(3000, () => {})
        