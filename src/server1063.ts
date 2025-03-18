
const express = require('express')
import {handler1063} from "./handler1063";
const app = express()
app.get('/1063', handler1063)
app.listen(3000, () => {})
        