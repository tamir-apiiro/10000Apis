
const express = require('express')
import {handler6970} from "./handler6970";
const app = express()
app.get('/6970', handler6970)
app.listen(3000, () => {})
        