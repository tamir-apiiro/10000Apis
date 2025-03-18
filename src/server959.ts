
const express = require('express')
import {handler959} from "./handler959";
const app = express()
app.get('/959', handler959)
app.listen(3000, () => {})
        