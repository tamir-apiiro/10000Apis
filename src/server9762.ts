
const express = require('express')
import {handler9762} from "./handler9762";
const app = express()
app.get('/9762', handler9762)
app.listen(3000, () => {})
        