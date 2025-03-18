
const express = require('express')
import {handler9931} from "./handler9931";
const app = express()
app.get('/9931', handler9931)
app.listen(3000, () => {})
        