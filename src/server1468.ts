
const express = require('express')
import {handler1468} from "./handler1468";
const app = express()
app.get('/1468', handler1468)
app.listen(3000, () => {})
        