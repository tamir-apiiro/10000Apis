
const express = require('express')
import {handler1507} from "./handler1507";
const app = express()
app.get('/1507', handler1507)
app.listen(3000, () => {})
        