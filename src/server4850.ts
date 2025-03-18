
const express = require('express')
import {handler4850} from "./handler4850";
const app = express()
app.get('/4850', handler4850)
app.listen(3000, () => {})
        