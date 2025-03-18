
const express = require('express')
import {handler4589} from "./handler4589";
const app = express()
app.get('/4589', handler4589)
app.listen(3000, () => {})
        