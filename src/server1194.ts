
const express = require('express')
import {handler1194} from "./handler1194";
const app = express()
app.get('/1194', handler1194)
app.listen(3000, () => {})
        