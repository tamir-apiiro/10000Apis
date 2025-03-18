
const express = require('express')
import {handler4834} from "./handler4834";
const app = express()
app.get('/4834', handler4834)
app.listen(3000, () => {})
        