
const express = require('express')
import {handler1132} from "./handler1132";
const app = express()
app.get('/1132', handler1132)
app.listen(3000, () => {})
        