
const express = require('express')
import {handler4968} from "./handler4968";
const app = express()
app.get('/4968', handler4968)
app.listen(3000, () => {})
        