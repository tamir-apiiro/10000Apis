
const express = require('express')
import {handler1352} from "./handler1352";
const app = express()
app.get('/1352', handler1352)
app.listen(3000, () => {})
        