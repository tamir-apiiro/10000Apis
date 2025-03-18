
const express = require('express')
import {handler1402} from "./handler1402";
const app = express()
app.get('/1402', handler1402)
app.listen(3000, () => {})
        