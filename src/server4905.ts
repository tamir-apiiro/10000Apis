
const express = require('express')
import {handler4905} from "./handler4905";
const app = express()
app.get('/4905', handler4905)
app.listen(3000, () => {})
        