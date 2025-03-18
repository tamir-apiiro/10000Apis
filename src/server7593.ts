
const express = require('express')
import {handler7593} from "./handler7593";
const app = express()
app.get('/7593', handler7593)
app.listen(3000, () => {})
        