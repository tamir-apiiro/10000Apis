
const express = require('express')
import {handler1097} from "./handler1097";
const app = express()
app.get('/1097', handler1097)
app.listen(3000, () => {})
        