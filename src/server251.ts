
const express = require('express')
import {handler251} from "./handler251";
const app = express()
app.get('/251', handler251)
app.listen(3000, () => {})
        