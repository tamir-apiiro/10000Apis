
const express = require('express')
import {handler9609} from "./handler9609";
const app = express()
app.get('/9609', handler9609)
app.listen(3000, () => {})
        