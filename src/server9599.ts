
const express = require('express')
import {handler9599} from "./handler9599";
const app = express()
app.get('/9599', handler9599)
app.listen(3000, () => {})
        