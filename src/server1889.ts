
const express = require('express')
import {handler1889} from "./handler1889";
const app = express()
app.get('/1889', handler1889)
app.listen(3000, () => {})
        