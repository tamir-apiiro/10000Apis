
const express = require('express')
import {handler1269} from "./handler1269";
const app = express()
app.get('/1269', handler1269)
app.listen(3000, () => {})
        