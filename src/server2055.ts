
const express = require('express')
import {handler2055} from "./handler2055";
const app = express()
app.get('/2055', handler2055)
app.listen(3000, () => {})
        