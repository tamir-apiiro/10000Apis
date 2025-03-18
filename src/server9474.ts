
const express = require('express')
import {handler9474} from "./handler9474";
const app = express()
app.get('/9474', handler9474)
app.listen(3000, () => {})
        