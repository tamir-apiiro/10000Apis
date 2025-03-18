
const express = require('express')
import {handler9429} from "./handler9429";
const app = express()
app.get('/9429', handler9429)
app.listen(3000, () => {})
        