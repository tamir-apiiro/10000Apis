
const express = require('express')
import {handler7114} from "./handler7114";
const app = express()
app.get('/7114', handler7114)
app.listen(3000, () => {})
        