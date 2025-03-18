
const express = require('express')
import {handler9643} from "./handler9643";
const app = express()
app.get('/9643', handler9643)
app.listen(3000, () => {})
        