
const express = require('express')
import {handler1148} from "./handler1148";
const app = express()
app.get('/1148', handler1148)
app.listen(3000, () => {})
        