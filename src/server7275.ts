
const express = require('express')
import {handler7275} from "./handler7275";
const app = express()
app.get('/7275', handler7275)
app.listen(3000, () => {})
        