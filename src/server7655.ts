
const express = require('express')
import {handler7655} from "./handler7655";
const app = express()
app.get('/7655', handler7655)
app.listen(3000, () => {})
        