
const express = require('express')
import {handler1693} from "./handler1693";
const app = express()
app.get('/1693', handler1693)
app.listen(3000, () => {})
        