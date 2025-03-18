
const express = require('express')
import {handler9691} from "./handler9691";
const app = express()
app.get('/9691', handler9691)
app.listen(3000, () => {})
        