
const express = require('express')
import {handler4063} from "./handler4063";
const app = express()
app.get('/4063', handler4063)
app.listen(3000, () => {})
        