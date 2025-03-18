
const express = require('express')
import {handler1055} from "./handler1055";
const app = express()
app.get('/1055', handler1055)
app.listen(3000, () => {})
        