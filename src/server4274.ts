
const express = require('express')
import {handler4274} from "./handler4274";
const app = express()
app.get('/4274', handler4274)
app.listen(3000, () => {})
        