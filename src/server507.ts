
const express = require('express')
import {handler507} from "./handler507";
const app = express()
app.get('/507', handler507)
app.listen(3000, () => {})
        