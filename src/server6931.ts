
const express = require('express')
import {handler6931} from "./handler6931";
const app = express()
app.get('/6931', handler6931)
app.listen(3000, () => {})
        