
const express = require('express')
import {handler4939} from "./handler4939";
const app = express()
app.get('/4939', handler4939)
app.listen(3000, () => {})
        