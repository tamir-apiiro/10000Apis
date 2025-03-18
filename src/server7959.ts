
const express = require('express')
import {handler7959} from "./handler7959";
const app = express()
app.get('/7959', handler7959)
app.listen(3000, () => {})
        