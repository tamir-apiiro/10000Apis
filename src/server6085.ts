
const express = require('express')
import {handler6085} from "./handler6085";
const app = express()
app.get('/6085', handler6085)
app.listen(3000, () => {})
        