
const express = require('express')
import {handler748} from "./handler748";
const app = express()
app.get('/748', handler748)
app.listen(3000, () => {})
        