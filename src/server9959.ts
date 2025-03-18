
const express = require('express')
import {handler9959} from "./handler9959";
const app = express()
app.get('/9959', handler9959)
app.listen(3000, () => {})
        